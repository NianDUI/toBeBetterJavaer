const e=JSON.parse('{"key":"v-30815cda","path":"/jvm/oom.html","title":"一次内存溢出排查优化实战","lang":"zh-CN","frontmatter":{"title":"一次内存溢出排查优化实战","shortTitle":"一次内存溢出排查优化实战","category":["Java核心"],"tag":["Java虚拟机"],"description":"二哥的Java进阶之路，小白的零基础Java教程，从入门到进阶，一次内存溢出排查优化实战","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,二哥的Java进阶之路,jvm,Java虚拟机,内存溢出"}],["meta",{"property":"og:url","content":"https://javabetter.cn/jvm/oom.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"一次内存溢出排查优化实战"}],["meta",{"property":"og:description","content":"二哥的Java进阶之路，小白的零基础Java教程，从入门到进阶，一次内存溢出排查优化实战"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java虚拟机"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一次内存溢出排查优化实战\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"表象","slug":"表象","link":"#表象","children":[]},{"level":2,"title":"排查","slug":"排查","link":"#排查","children":[]},{"level":2,"title":"定位","slug":"定位","link":"#定位","children":[]},{"level":2,"title":"解决","slug":"解决","link":"#解决","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1648406568000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":7},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":5.87,"words":1760},"filePathRelative":"jvm/oom.md","localizedDate":"2022年3月28日","excerpt":"<h1> 一次内存溢出排查优化实战</h1>\\n<h2> 前言</h2>\\n<p><code>OutOfMemoryError</code> 问题相信很多朋友都遇到过，相对于常见的业务异常（数组越界、空指针等）来说这类问题是很难定位和解决的。</p>\\n<p>本文以最近碰到的一次线上内存溢出的定位、解决问题的方式展开；希望能对碰到类似问题的同学带来思路和帮助。</p>\\n<p>主要从<code>表现--&gt;排查--&gt;定位--&gt;解决</code> 四个步骤来分析和解决问题。</p>\\n<h2> 表象</h2>\\n<p>最近我们生产上的一个应用不断的爆出内存溢出，并且随着业务量的增长出现的频次越来越高。</p>"}');export{e as data};