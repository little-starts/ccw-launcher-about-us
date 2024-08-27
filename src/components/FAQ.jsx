import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "共创世界启动器 和 Gandi 客户端 有什么区别？",
    answer:
      "共创世界启动器采用 Tauri + WebView2 技术栈，是对所导入的作品的整合，可以帮助你快速创建及开发作品，且不会限制性能；而 Gandi 客户端采用基于类浏览器的 Electron 框架，会主动限制资源占用，且只是将 Gandi 嵌入本地并作优化。",
  },
  {
    question: "共创世界启动器是共创世界官方出品的吗？",
    answer:
      "不是，共创世界启动器是 Gandi 爱好者们自发编写的，但我们的开发标准绝对等于或大于官方客户端的标准，且支持跟随官方热更新。",
  },
  {
    question: "共创世界启动器会断更吗？",
    answer:
      `只要共创世界还存在，我们就不会停止维护，欢迎点击右上角的"源代码"按钮给我们提 Issues（问题及需求）和 PR`,
  },
  {
    question: "共创世界启动器的开发者有哪些？",
    answer:
      `共创世界启动器的主要开发者是 @白猫 ，后来 @多bug的啸天犬 也参与了部分功能的制作，自动签到功能由 @酷可MC 提供支持`,
  },
];

export const FAQ = () => (
  <section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">有很多问题？</p>
          <h2 className="mb-16 block-big-title text-center">
            这些问题，你也有吗？
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
