import React from "react";
import { PortableText } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/esm/styles/prism/vs-dark";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage, getImageDimensions } from "@sanity/asset-utils";
import sanityConfig from "../../sanity-config";
import { Title } from "./typography/Title";
import ParagraphText from "./typography/ParagraphText";
import { getSanityImageData } from "../utils/getSanityImageData";

const myPortableTextComponents = {
  block: {
    normal: ({ children }) => <ParagraphText>{children}</ParagraphText>,
    h1: ({ children }) => <Title>{children}</Title>,
  },
  types: {
    customCode: ({ value }) => (
      <SyntaxHighlighter style={theme} className='bodyCode'>
        language={value.code.language} {/* Пропущен символ '{' */}
        {String(value.code.code).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ),
    customImage: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset;
      const { width, height } = getImageDimensions(value); // Исправлена опечатка 'heigth' на 'height'

      const image = {
        url: imageData.url,
        height, // Исправлена опечатка 'heigth' на 'height'
        width,
      };

      const gatsbyImageData = getSanityImageData({
        image,
        layout: "constrained",
      });
      return (
        <GatsbyImage
          image={gatsbyImageData}
          alt={value.alt}
          className='bodyImage'
        />
      );
    },
  },
};

function MyPortableText({ value }) {
  return <PortableText value={value} components={myPortableTextComponents} />;
}

export default MyPortableText;
