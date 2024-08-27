import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import skydoge from "../assets/images/Skydoge.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "多bug的啸天犬",
    customerTitle: "主题教程撰写者 & Gandi 资深使用者 &Gandi 插件开发者 & Gandi 内测用户",
    content:
      "共创世界启动器 大大提升了 Gandi 的性能，相比于官方的客户端，它提供了更好的性能利用和卡顿优化，且兼容性更强，让我感到用起来很顺手！",
    image: skydoge
  },
  {
    customerName: "YK1BOY",
    customerTitle: "主题教程撰写者 & Gandi 核心用户 & CCW人气创作者 & CCW Game Jam 主理人 ",
    content:
      "共创世界启动器真是太好用了，共创世界的启动器是世界上最好用的启动器，启动迅速，操作简单，效果显著，白猫青天大老爷绝不会冤枉任何一个特性，也绝不会放过任何一个BUG。",
    image: testimonial2,
  },
  {
    customerName: "酷可MC",
    customerTitle: "Gandi 核心用户 & Gandi 拓展开发者 & Gandi 人气创作者 & Gandi 内测用户",
    content:
      "",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative" id="user-feedback">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-subtitle text-center mb-6">用户评价</div>
        <div className="block-big-title text-center mb-20 px-8 sm:px-24 md:px-48">
          听听大家怎么说
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="content-text-white">"{testimonial.content}"</div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div>
                  <img
                    src={testimonial.image.src}
                    alt="Customer avatar"
                    width="300px"
                    height="300px"
                    aria-label={testimonial.customerName}
                  />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
