import { useState, useEffect } from "react";
import { useLazyGetSummaryQuery } from "../redux/article";
import copy from "../assets/copy.svg";
import linkIcon from "../assets/link.svg";
import loader from "../assets/loader.svg";
import tick from "../assets/tick.svg";
import enter from "../assets/enter.svg";
import { motion } from "framer-motion";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  type Article = {
    url: string;
    summary: string;
  };
  const [allArticles, setAllArticles] = useState<Article[]>([]);

  const [copied, setCopied] = useState("");
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  useEffect(() => {
    const articlesFromLocalStorageString = localStorage.getItem("articles");
    const articlesFromLocalStorage =
      typeof articlesFromLocalStorageString === "string"
        ? JSON.parse(articlesFromLocalStorageString)
        : null;
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);
  type FormOrKeyboardEvent =
    | React.FormEvent<HTMLFormElement>
    | React.KeyboardEvent<HTMLInputElement>;
  const handleSubmit = async (e: FormOrKeyboardEvent) => {
    e.preventDefault();

    const existingArticle = allArticles.find(
      (item) => item.url === article.url
    );
    if (existingArticle) return setArticle(existingArticle);

    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };
  const handleCopy = (copyUrl: string) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(""), 3000);
  };
  return (
    <motion.section
      variants={{
        hidden: {
          opacity: 0,
          y: 75,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
      id="demo"
      className="mt-32 flex flex-col w-[90%] items-center justify-between px-10 py-12 rounded-[20px] max-w-[1280px] m-8 my-5 feedback-card-custom mx-auto"
    >
      <div className="text-center text-white font-bold w-full max-w-3xl">
        <p className="mb-6 text-center">
          You are in the right place with{" "}
          <span className="text-gradient">SUMMAI</span>. Test it.
        </p>
        <form
          className="bg-white flex items-center rounded-md mb-2"
          onSubmit={handleSubmit}
        >
          <img src={linkIcon} alt="link-icon" className="p-2" />
          <input
            type="url"
            placeholder="Paste your link here..."
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
            onKeyDown={(e) => {
              e.key === "Enter" && handleSubmit(e);
            }}
            required
            className="url_input text-gray-700 w-full mr-1 p-1"
          />
          <button
            type="submit"
            className="submit_btn p-2 bg-gray-300 rounded-e-lg w-10"
          >
            <img src={enter} alt="enter_icon" className="my-1" />
          </button>
        </form>
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div className="copy_btn flex items-center text-left p-2 cursor-pointer">
                <img
                  onClick={() => handleCopy(item.url)}
                  src={copied === item.url ? tick : copy}
                  alt={copied === item.url ? "tick_icon" : "tick_copy"}
                  className="md:w-[3%] md:h-[3%] w-5 object-contain mr-2.5"
                />
                <p className="flex-1 font-poppins text-blue-700 font-medium text-sm truncate">
                  {item.url}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-semibold text-white text-center">
            Please insert a valid link.
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-poppins font-bold text-gradient text-xl px-4">
                Article <span className="orange_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-poppins text-justify font-medium text-sm text-white px-4">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </motion.section>
  );
};
export default Demo;
