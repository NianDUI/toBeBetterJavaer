const t=JSON.parse('{"key":"v-f5eaccf2","path":"/basic-grammar/type-cast.html","title":"Java数据类型转换：自动类型转换与强制类型转换","lang":"zh-CN","frontmatter":{"title":"Java数据类型转换：自动类型转换与强制类型转换","shortTitle":"Java数据类型转换","category":["Java核心"],"tag":["Java语法基础"],"description":"本文详细讲解了Java数据类型转换，包括强制类型转换和自动类型转换。通过学习本文，您将深入理解Java数据类型转换的原理和使用场景，掌握各种类型转换的技巧，避免常见的类型转换错误，提高Java编程效率。","head":[["meta",{"name":"keywords","content":"Java, 数据类型转换, 强制类型转换, 自动类型转换"}],["meta",{"property":"og:url","content":"https://javabetter.cn/basic-grammar/type-cast.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Java数据类型转换：自动类型转换与强制类型转换"}],["meta",{"property":"og:description","content":"本文详细讲解了Java数据类型转换，包括强制类型转换和自动类型转换。通过学习本文，您将深入理解Java数据类型转换的原理和使用场景，掌握各种类型转换的技巧，避免常见的类型转换错误，提高Java编程效率。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java语法基础"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java数据类型转换：自动类型转换与强制类型转换\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"01、自动类型转换","slug":"_01、自动类型转换","link":"#_01、自动类型转换","children":[]},{"level":3,"title":"02、强制类型转换","slug":"_02、强制类型转换","link":"#_02、强制类型转换","children":[]}],"git":{"createdTime":1661242206000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":8},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":4}]},"readingTime":{"minutes":6.52,"words":1957},"filePathRelative":"basic-grammar/type-cast.md","localizedDate":"2022年8月23日","excerpt":"<h1> 3.4 Java数据类型转换</h1>\\n<p>“三妹，今天我们来聊聊 Java 中的数据类型转换。”我开门见山地对三妹说。</p>\\n<p>“好啊。”三妹愉快地说。</p>\\n<p>数据类型转换的目的是确保在表达式求值时，不同类型的数据能够相互兼容。</p>\\n<h3> 01、自动类型转换</h3>\\n<p>自动类型转换（自动类型提升）是 Java 编译器在不需要显式转换的情况下，将一种基本数据类型自动转换为另一种基本数据类型的过程。这种转换通常发生在表达式求值期间，当不同类型的数据需要相互兼容时。自动类型转换遵循以下规则：</p>\\n<ul>\\n<li>如果任何操作数是 double 类型，其他操作数将被转换为 double 类型。</li>\\n<li>否则，如果任何操作数是 float 类型，其他操作数将被转换为 float 类型。</li>\\n<li>否则，如果任何操作数是 long 类型，其他操作数将被转换为 long 类型。</li>\\n<li>否则，所有操作数将被转换为 int 类型。</li>\\n</ul>"}');export{t as data};
