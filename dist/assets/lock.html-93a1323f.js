const e=JSON.parse('{"key":"v-46ec2dc2","path":"/thread/lock.html","title":"大致了解下Java的锁接口和锁","lang":"zh-CN","frontmatter":{"title":"大致了解下Java的锁接口和锁","shortTitle":"大致了解下Java的锁接口和锁","description":"大致了解下Java的锁接口和锁","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,锁"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/lock.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"大致了解下Java的锁接口和锁"}],["meta",{"property":"og:description","content":"大致了解下Java的锁接口和锁"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"大致了解下Java的锁接口和锁\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"synchronized的不足之处","slug":"synchronized的不足之处","link":"#synchronized的不足之处","children":[]},{"level":2,"title":"锁的几种分类","slug":"锁的几种分类","link":"#锁的几种分类","children":[{"level":3,"title":"可重入锁和非可重入锁","slug":"可重入锁和非可重入锁","link":"#可重入锁和非可重入锁","children":[]},{"level":3,"title":"公平锁与非公平锁","slug":"公平锁与非公平锁","link":"#公平锁与非公平锁","children":[]},{"level":3,"title":"读写锁和排它锁","slug":"读写锁和排它锁","link":"#读写锁和排它锁","children":[]}]},{"level":2,"title":"JDK中有关锁的一些接口和类","slug":"jdk中有关锁的一些接口和类","link":"#jdk中有关锁的一些接口和类","children":[{"level":3,"title":"抽象类AQS/AQLS/AOS","slug":"抽象类aqs-aqls-aos","link":"#抽象类aqs-aqls-aos","children":[]},{"level":3,"title":"接口Condition/Lock/ReadWriteLock","slug":"接口condition-lock-readwritelock","link":"#接口condition-lock-readwritelock","children":[]},{"level":3,"title":"ReentrantLock","slug":"reentrantlock","link":"#reentrantlock","children":[]},{"level":3,"title":"ReentrantReadWriteLock","slug":"reentrantreadwritelock","link":"#reentrantreadwritelock","children":[]},{"level":3,"title":"StampedLock","slug":"stampedlock","link":"#stampedlock","children":[]}]}],"git":{"createdTime":1648037338000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":8},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":13,"words":3901},"filePathRelative":"thread/lock.md","localizedDate":"2022年3月23日","excerpt":"<h1> 大致了解下Java的锁接口和锁</h1>\\n<p>前面我们介绍了Java原生的锁——基于对象的锁，它一般是配合synchronized关键字来使用的。实际上，Java在<code>java.util.concurrent.locks</code>包下，还为我们提供了几个关于锁的类和接口。它们有更强大的功能或更高的性能。</p>\\n<h2> synchronized的不足之处</h2>\\n<p>我们先来看看<code>synchronized</code>有什么不足之处。</p>\\n<ul>\\n<li>如果临界区是只读操作，其实可以多线程一起执行，但使用synchronized的话，<strong>同一时间只能有一个线程执行</strong>。</li>\\n<li>synchronized无法知道线程有没有成功获取到锁</li>\\n<li>使用synchronized，如果临界区因为IO或者sleep方法等原因阻塞了，而当前线程又没有释放锁，就会导致<strong>所有线程等待</strong>。</li>\\n</ul>"}');export{e as data};
