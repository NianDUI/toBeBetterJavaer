const e=JSON.parse('{"key":"v-31f3ed6c","path":"/io/char-byte.html","title":"Java 转换流：Java 字节流和字符流的桥梁","lang":"zh-CN","frontmatter":{"title":"Java 转换流：Java 字节流和字符流的桥梁","shortTitle":"转换流","category":["Java核心"],"tag":["Java IO"],"description":"本文详细介绍了 Java 转换流在 IO 操作中的重要作用，阐述了其如何有效地将字节流与字符流相互转换。同时，文章还提供了转换流的实际应用示例和常用方法。阅读本文，将帮助您更深入地了解 Java 转换流及其在 Java 编程中的关键地位，提高数据处理的灵活性和效率。","head":[["meta",{"name":"keywords","content":"Java,Java IO,转换流,InputStreamReader,OutputStreamWriter,乱码,编码,解码,java转换流"}],["meta",{"property":"og:url","content":"https://javabetter.cn/io/char-byte.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Java 转换流：Java 字节流和字符流的桥梁"}],["meta",{"property":"og:description","content":"本文详细介绍了 Java 转换流在 IO 操作中的重要作用，阐述了其如何有效地将字节流与字符流相互转换。同时，文章还提供了转换流的实际应用示例和常用方法。阅读本文，将帮助您更深入地了解 Java 转换流及其在 Java 编程中的关键地位，提高数据处理的灵活性和效率。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T14:14:27.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java IO"}],["meta",{"property":"article:modified_time","content":"2023-04-10T14:14:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 转换流：Java 字节流和字符流的桥梁\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-10T14:14:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"01、编码和解码","slug":"_01、编码和解码","link":"#_01、编码和解码","children":[]},{"level":3,"title":"02、字符集","slug":"_02、字符集","link":"#_02、字符集","children":[]},{"level":3,"title":"03、乱码","slug":"_03、乱码","link":"#_03、乱码","children":[]},{"level":3,"title":"04、InputStreamReader","slug":"_04、inputstreamreader","link":"#_04、inputstreamreader","children":[]},{"level":3,"title":"05、OutputStreamWriter","slug":"_05、outputstreamwriter","link":"#_05、outputstreamwriter","children":[]},{"level":3,"title":"06、小结","slug":"_06、小结","link":"#_06、小结","children":[]}],"git":{"createdTime":1661412910000,"updatedTime":1681136067000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":5},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2},{"name":"luanheart","email":"luanheartx@gmail.com","commits":1}]},"readingTime":{"minutes":11.85,"words":3556},"filePathRelative":"io/char-byte.md","localizedDate":"2022年8月25日","excerpt":"<h1> 7.6 转换流</h1>\\n<p>转换流可以将一个<a href=\\"https://javabetter.cn/io/stream.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">字节流</a>包装成<a href=\\"https://javabetter.cn/io/reader-writer.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">字符流</a>，或者将一个字符流包装成字节流。这种转换通常用于处理文本数据，如读取文本文件或将数据从网络传输到应用程序。</p>\\n<p>转换流主要有两种类型：InputStreamReader 和 OutputStreamWriter。</p>"}');export{e as data};
