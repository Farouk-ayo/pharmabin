"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  ArrowRightIcon,
  FacebookIcon2,
  TwitterIcon,
  WhatsappIcon,
} from "@/components/icons";
import Button from "@/components/buttons";
import Link from "next/link";

type ArticleContent = {
  id: string;
  title: string;
  date: string;
  mainImage: string;
  content: {
    title: string;
    description: string;
    image: string;
  }[];
  relatedPosts: {
    title: string;
    link: string;
  }[];
};

const articlesData: ArticleContent[] = [
  {
    id: "1",
    title:
      "The Role Of Healthcare Innovation And Technology In Pharmaceutical Waste Management",
    date: "Saturday, December 10, 2024",
    mainImage: "/article-1.png",
    content: [
      {
        title: "Understanding the Waste Management Landscape in Healthcare",
        description: `The healthcare industry is undergoing a transformation, and innovation is at the forefront of it all. From smarter waste segregation techniques to more sustainable disposal methods, healthcare facilities are moving towards safer, more cost-effective and environmentally friendly solutions.\n\nIn the United States alone, hospital patients generate about 6 million tons of waste annually. Around 20% of this waste is considered hazardous or biohazardous, posing risks of exposure to infectious diseases and harmful chemicals if not handled properly. Outdated waste management practices not only raise safety concerns but also drive up operational costs for healthcare providers. As regulatory frameworks grow more complex, compliance with waste management protocols becomes critical for healthcare administrators.`,
        image: "/community-9.png",
      },
      {
        title:
          "The Role of Smart Waste Management Technology in Improving Safety",
        description: `Safety is a top priority in waste management, and the introduction of smart waste management technologies is a game-changer in healthcare innovation, capable of reducing risks associated with medical waste handling.`,
        image: "/community-11.png",
      },
    ],
    relatedPosts: [
      {
        title:
          "Is NAPSAC Really The End Point Of Pharmaceutical Waste Disposal",
        link: "#",
      },
      {
        title: "What Is A Pharmaceutical Waste Incinerator And How It Works",
        link: "#",
      },
      {
        title: "What Are The Requirement For Efficient Disposal Of Waste",
        link: "#",
      },
      {
        title: "Basic Rules For The Handling Of Pharmaceutical Waste",
        link: "#",
      },
      {
        title:
          "Are NAPSAC & NOLEA Really Related To Pharmaceutical Waste Disposal",
        link: "#",
      },
      {
        title: "Are Community Pharmacies Responsible For The Collection",
        link: "#",
      },
    ],
  },
];
const socialLinks = [
  {
    name: "WhatsApp",
    link: `https://wa.me/?text=${encodeURIComponent(
      "Check this out: " + window.location.href
    )}`,
    simpleIcon: (
      <WhatsappIcon stroke="#25D366" fill="#25D366" className="h-5 w-5" />
    ),
  },
  {
    name: "Facebook",
    link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`,
    simpleIcon: <FacebookIcon2 fill="#0866FF" />,
  },
  {
    name: "X",
    link: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      "Check this out: " + window.location.href
    )}`,
    simpleIcon: <TwitterIcon fill="#000000" />,
  },
];

const ArticleDetails = () => {
  const { id } = useParams();
  const article = articlesData.find((a) => a.id === id) || articlesData[0];

  return (
    <section className=" relative  top-28  md:top-40 px-4 lg:px-28 pb-40 items-center overflow-hidden">
      <div>
        <div className="flex flex-col md:flex-row gap-2 justify-between md:items-center my-4 ">
          <div className="flex md:items-center text-sm text-textPrimary mb-4">
            <Link className="" href={"/articles"}>
              {" "}
              <span className="text-primary">Articles</span>
            </Link>
            <ArrowRightIcon className="h-2 w-2 mx-2" />
            <span>{article.title}</span>
          </div>
          <div className="flex items-center  gap-2">
            <span className="text-primary">Share via:</span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className=""
                title={`Share via ${social.name}`}
              >
                {social.simpleIcon}
              </a>
            ))}
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {article.title}
        </h1>
        <p className="text-textPrimary mb-6"> {article.date}</p>
        <div className="w-full h-[40rem] relative mb-8">
          <Image
            src={article.mainImage}
            alt="Hands-Free Waste Disposal"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {article.content.map((content, index) => (
            <div className="prose max-w-none  mt-6" key={index}>
              <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                {content.title}
              </h2>

              <p className="text-gray-700 mb-8">{content.description}</p>

              {/* Waste Bins Image */}
              <div className="relative bg-sky-100 w-full h-[28rem] rounded-lg mb-8">
                <Image
                  src={content.image}
                  alt="Hands-Free Waste Disposal"
                  layout="fill"
                  priority
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar - Takes up 1 column */}
        <div className="lg:col-span-1 ">
          <div className="mb-8 p-4 border rounded-lg border-gray-300">
            <h3 className="font-semibold mb-4 md:text-xl ">Related Posts</h3>
            <ul className="space-y-3">
              {article.relatedPosts.map((post, index) => (
                <li key={index} className="border-b border-gray-300">
                  <a
                    href={post.link}
                    className="text-gray-700 hover:text-primary transition-colors block"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`/articles`}
              className="text-primary font-semibold hover:underline flex items-center mt-2"
            >
              See More Articles{" "}
              <span className="ml-2 text-primary ">&rarr;</span>
            </a>
          </div>

          {/* Testimonial */}
          <div className="relative rounded-lg overflow-hidden mb-8">
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: "url(/community-slider.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />{" "}
            <div className="absolute inset-0 bg-gradient-to-r from-[#023022E8]/90 via-[#157D18B8]/48 to-[#157D18B8]/70 bg-[#157D18]/60 md:bg-transparent " />
            <div className="relative z-10 text-left px-4 text-white max-w-5xl mx-auto py-16">
              <p className="text-2xl md:text-4xl text-white font-medium italic mb-4">
                “This was disposal body has opened my eyes to the rules and
                regulations that go along with all aspects of a healthcare
                facility. It makes compliance so easy.”
              </p>
              <p className="text-lg font-medium text-secondary">
                Dr. Johnson Titus
                <br />
                <span className="text-secondary/70">
                  MD Lando Recycling Industrial Limited
                </span>
              </p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-primary/10 p-6 rounded-lg text-center mb-8">
            <h3 className="font-semibold mb-2 text-lg md:text-2xl ">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Tips, stories, and new approaches to work management,
              collaboration, and productivity. Get them weekly to your inbox.
            </p>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full p-2 mb-2 border rounded"
            />
            <Button variant="primary" className="w-full text-white">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetails;
