import React from 'react'

export default function About() {
   document.title = "TextUtils - About" 
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <h2 className="text-center mb-4">About TextUtils</h2>
            <p>TextUtils is a <strong>powerful</strong> text editing utility that allows users to easily manipulate text in a variety of ways. With TextUtils, users can quickly convert text to <em>uppercase</em>, <em>lowercase</em>, <em>Pascal case</em>, <em>camel case</em>, <em>inverse case</em>, and <em>title case</em>.</p>

            <p>Converting text to <strong>uppercase</strong> or <strong>lowercase</strong> is straightforward and simply involves changing all the letters in the text to their uppercase or lowercase equivalents. This can be useful when capitalization is important, such as when entering passwords or formatting text for titles.</p>

            <p><em>Pascal case</em> and <em>camel case</em> are both used to format text in a specific way. <em>Pascal case</em> involves capitalizing the first letter of each word in the text, while <em>camel case</em> involves capitalizing the first letter of each word except the first word. These formats are often used in programming languages, and TextUtils makes it easy to convert text to either format.</p>

            <p><em>Inverse case</em>, also known as <strong>alternating case</strong>, involves capitalizing every other letter in the text. This can be a fun and playful way to format text, and TextUtils makes it easy to apply this formatting to any text.</p>

            <p><em>Title case</em> involves capitalizing the first letter of each word in the text, with the exception of articles, conjunctions, and prepositions. This is a common format for titles and headlines, and TextUtils makes it easy to apply this formatting to any text.</p>

            <p>Overall, TextUtils is a versatile and <strong>powerful</strong> tool for manipulating text, and its various formatting options make it a useful utility for a wide range of applications.</p>            </div>
        </div>
      </div>
    </>
  )
}
