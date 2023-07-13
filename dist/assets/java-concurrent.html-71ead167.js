import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,e as i}from"./app-1c5b5ce3.js";const r={},n=i('<p>你好，我是二哥。对于一个 Java 程序员而言，能否熟练掌握并发编程是判断他优秀与否的重要标准之一。因为并发编程是 Java 语言中最为晦涩的知识点，它涉及操作系统、内存、CPU、编程语言等多方面的基础能力，更能考验一个程序员的内功。</p><p>尤其是大数据时代的来临，高并发更成为了家常便饭，工作中，你总是绕不开并发编程的任务，比如说，你想写个程序，一边从文件中读取数据，一边还要做实时计算…所以，<strong>想成为一名资深的 Java 后端工程师，想进大厂，并发编程必须要牢牢把握</strong>。</p><p>微信搜索「<strong>沉默王二</strong>」关注后，在后台回复「<strong>并发</strong>」即可获取《深入浅出 Java 多线程》小册一本，文末有详细介绍。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>也可以截图后，微信扫码关注后回复「<strong>006</strong>」</p><h3 id="一、掌握基础概念" tabindex="-1"><a class="header-anchor" href="#一、掌握基础概念" aria-hidden="true">#</a> 一、掌握基础概念</h3><p>学习 Java 并发编程，第一步就是要打下坚实的基础，把涉及的相关基础概念都搞清楚。比如，深度认识 Java 内存模型、死锁产生的原因和解决方案、线程间的协作机制，等等。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-shenrjcjavabfbchwjdhl-05c70ffd-7779-426c-86fa-dac18cb63501.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="二、拿下常见的并发工具类" tabindex="-1"><a class="header-anchor" href="#二、拿下常见的并发工具类" aria-hidden="true">#</a> 二、拿下常见的并发工具类</h3><p>把并发编程核心的问题搞清楚，回过头来看 Java SDK 并发包，你才会有种豁然开朗的感觉：它不过是针对并发问题开发出来的工具而已。而此时的 SDK 并发包就可以任你“盘”了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-shenrjcjavabfbchwjdhl-5cd089fe-6c67-49e6-af45-b2e1f9b2e05e.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="三、并发编程全景图" tabindex="-1"><a class="header-anchor" href="#三、并发编程全景图" aria-hidden="true">#</a> 三、并发编程全景图</h3><p>学习最忌讳的就是“盲人摸象”，只看到局部，而没有看到全局。所以，你需要从一个个单一的知识和技术中“跳出来”，高屋建瓴地看并发编程。当然，这首要之事就是你建立起一张全景图。</p><p>结合我多年的工作经验来看，并发编程领域可以抽象成<strong>三个核心问题：分工、同步和互斥</strong>。以下是我根据这三个核心问题制作的「并发编程全景图」，可以让你的知识成体系，所学知识也融汇贯通起来，由点成线，由线及面。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-shenrjcjavabfbchwjdhl-b8030855-7f2a-42cd-9231-a9f7b0269e53.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>但是光跳出来还不够，还需要下一步，就是在某个问题上钻进去，深入理解，找到本质。比如，当看到 Java SDK 里面的条件变量 Condition 的时候，我会下意识地问，“它是从哪儿来的？是 Java 的特有概念，还是一个通用的编程概念？”当我知道他来自管程的时候，我又会问，“管程被提出的背景和解决的问题是什么？”这样一路探索下来，我发现 Java 语言里的并发技术基本都是有理论基础的，并且这些理论在其他编程语言里也有类似的实现。</p><h3 id="四、深入浅出-java-多线程" tabindex="-1"><a class="header-anchor" href="#四、深入浅出-java-多线程" aria-hidden="true">#</a> 四、深入浅出 Java 多线程</h3><p>学习 Java 并发编程，有一本书是跳不过去的，那就是《<strong>Java 并发编程实战</strong>》，但这本书往往读起来会感觉比较深奥，怎么办呢？</p><p>几位阿里的大佬偷偷写了一本《<strong>深入浅出 Java 多线程</strong>》，并且在 GitHub 上开源了。</p><p>先说说这几名作者哈。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-shenrjcjavabfbchwjdhl-b43e334f-9226-4078-ae47-77858c84f1b2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>给力吧，都是大佬，所以他们的作品也非常值得信赖。再给你看一下大致的内容，就 Java 内存模型这块的知识点，就讲的非常透彻。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-shenrjcjavabfbchwjdhl-2a4c068e-8381-491c-a330-9afec9cd43dd.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>除了这本，我这还屯了不少 Java 并发编程方面的电子书。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-shenrjcjavabfbchwjdhl-37f2db07-1543-4ac7-b8fc-b51b7dc15d84.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>微信搜索「沉默王二」关注后，在后台回复「书单」即可获取本文书单链接。</strong></p><p><strong>回复「pdf」即可获取本文提到的书籍电子版pdf</strong></p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>也可以截图后，微信扫码关注</strong></p>',29),c=[n];function o(g,p){return e(),t("div",null,c)}const b=a(r,[["render",o],["__file","java-concurrent.html.vue"]]);export{b as default};
