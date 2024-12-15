let pathToNavWebsites = "./modules/menus/menus.json";
// Path to the JSON file of the navigation websites.

let websites = {
    "":[
       
    ],
    "Searching engine" : [
        {"content" : "Baidu","href" : "https://www.baidu.com/"}, //https://39.156.66.14/
        {"content" : "Bing","href"  : "https://www.bing.com/"},
        {"content" : "Yandex","href" : "https://yandex.com/"},
        {"content" : "Google","href" : "https://www.google.com/"}
    ],
    "encyclopedias" : [
        {"content" : "Wikipedia","href" : "https://www.wikipedia.ch/"},
        {"content" : "Baidubike","href"  : "https://baike.baidu.com/"},
        {"content" : "Britannica","href" : "https://www.britannica.com/"},
        {"content" : "wikiHow","href" : "https://zh.wikihow.com/%E9%A6%96%E9%A1%B5"},
        {"content" : "The Free Dictionary","href" : "https://www.mbalib.com/"},
        {"content" : "MBA智库","href" : "https://www.thefreedictionary.com/"},
        {"content" : "百科名医","href" : "https://www.baikemy.com/"},
        {"content" : "默沙东诊疗手册","href" : "https://www.msdmanuals.cn/"},
        {"content" : "Ballot Pedia","href" : "https://ballotpedia.org/"},
        {"content" : "DevDocs","href"  : "https://devdocs.io/"},
        {"content" : "外唐网","href" : "https://www.waitang.com/"},
        {"content" : "","href" : ""}
    ],
    "News" : [
        {"content" : "CNN","href" : "https://cnn.com/"},
        {"content" : "NPR","href"  : "https://www.npr.org/"},
        {"content" : "CNBC","href" : "https://www.cnbc.com/"},
        {"content" : "NBC News","href" : "https://www.nbcnews.com/"},
        {"content" : "Financial Times","href" : "https://www.ft.com/"}
    ],
    "Code hosting" : [
        {"content" : "GitHub","href" : "https://github.com/"},
        {"content" : "kGitHub","href"  : "https://kgithub.com/ "},
        {"content" : "","href" : ""},
        {"content" : "","href" : ""},
        {"content" : "","href" : ""}
    ],
    "IT tutorials" : [
        {"content" : "W3schools","href" : "https://www.w3schools.com/"},
        {"content" : "Khan Academy","href"  : "https://www.khanacademy.org/"},
        {"content" : "javatpoint","href"  : "https://www.javatpoint.com/"},
        {"content" : "菜鸟教程","href"  : "https://www.runoob.com/"},
        {"content" : "IT苍穹","href"  : "https://skyofit.com/"},
        {"content" : "JavaGuide","href"  : "https://javaguide.cn/"},
        {"content" : "freeCodeCamp","href"  : "https://www.freecodecamp.org/"},
        {"content" : "CSDN","href"  : "https://www.csdn.net/"},
        {"content" : "https://www.nowcoder.com/","href"  : "牛客网"},
        {"content" : "","href"  : ""},
        {"content" : "","href"  : ""}
    ],
    "Open Source" : [
        {"content" : "开源中国","href" : "https://www.oschina.net/"},
        {"content" : "","href"  : ""},
        {"content" : "","href"  : ""}
    ],
    "Community Q&A" : [
        {"content" : "知乎","href" : "https://www.zhihu.com/"},
        {"content" : "4Chan","href"  : "https://www.4chan.org/"},
        {"content" : "https://www.quora.com/","href"  : "Quora"}
    ],
    "AI ChatGPT" : [
        {"content" : "AICHATOS永久网址发布页","href" : "https://x.aichatos8.cn"},
        {"content" : "chat18.aichatos8","href"  : "https://chat18.aichatos8.com/#/chat/1716360990179"},
        {"content" : "gpt-4o","href"  : "https://chatgpt.com/?model=gpt-4o"}
    ],
    "Translator" : [
        {"content" : "Microsoft Translator","href" : "https://cn.bing.com/translator"},
        {"content" : "","href"  : ""}

    ],
    "Video" : [
        {"content" : "bilibili","href" : "https://www.bilibili.com/"},
        {"content" : "YouTube","href"  : "https://www.youtube.com/"}

    ],
    "Question bank" : [
        {"content" : "英语真题在线","href" : "https://zhenti.burningvocabulary.com/"},
        {"content" : "","href"  : ""}
    ],
    "Mathematics" : [
        {"content" : "Math Insight","href" : "https://mathinsight.org/"},
        {"content" : "数学乐","href" : "https://www.shuxuele.com/"},
        {"content" : "LibreTexts","href"  : "https://math.libretexts.org/"}
    ],
    "Linguistics" : [
        {"content" : "LingoHut","href" : "https://www.lingohut.com/"},
        {"content" : "REAL.FUN","href" : "https://neal.fun/infinite-craft/"},
        {"content" : "1000 Most Common Words","href" : "https://1000mostcommonwords.com/1000%E4%B8%AA%E6%9C%80%E5%B8%B8%E7%94%A8%E7%9A%84%E5%BE%B7%E8%AF%AD%E5%8D%95%E8%AF%8D/"},
        {"content" : "LibreTexts","href"  : "https://math.libretexts.org/"},
        {"content" : "可可英语","href"  : "http://www.kekenet.com/"},
        {"content" : "Grammarly","href"  : "https://www.grammarly.com/"}
        
    ],
    "Scholar" : [
        {"content" : "PubScholar","href" : "https://pubscholar.cn/"},
        {"content" : "","href"  : ""}
    ],
    "Finance" : [
        {"content" : "银登网","href" : "https://www.yindeng.com.cn/Home/cn/index.shtml"},
        {"content" : "","href"  : ""}
    ],
    "Magnet Searcher" : [
        {"content" : "磁力狐","href" : "https://cihu.xyz"},
        {"content" : "找磁力","href" : "https://www.zhaocili.xyz/"},
        {"content" : "吴签磁力","href"  : "https://wuqianpx.top/"},
        {"content" : "磁力猫","href"  : "https://www.xsmxdy.com/"}
    ],
    "Encryption & Decryption" : [
        {"content" : "CMD5","href" : "https://www.cmd5.com/"},
        {"content" : "","href"  : ""}
    ],
    "Industry association official" : [
        {"content" : "联合国","href"  : "https://www.un.org/"},
        {"content" : "全国信息安全标准化技术委员会","href" : "https://www.tc260.org.cn/"},
        {"content" : "NotSoSecure","href"  : "https://notsosecure.com/"},
        
        
    ],
    "Course" : [
        {"content" : "配音","href" : "https://www.bilibili.com/video/BV1HT421D7W8/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=361852a70fc382e270e6a91eb60427cc"},
        {"content" : "","href" : ""},
        {"content" : "","href"  : ""},
        {"content" : "","href"  : ""}
    ],
    "Funny" : [
        {"content" : "Touch Pianist","href" : "https://touchpianist.com/"},
        {"content" : "Country Reports","href"  : "https://www.countryreports.org/"},
        {"content" : "MobileHeart","href"  : "http://mobileheart.com/"},
        {"content" : "RetroArch","href"  : "https://www.retroarch.com/"},
        {"content" : "https://sharkle.com/","href"  : "Sharkle"},
        {"content" : "https://zh.stripchat.com/","href"  : "StripChat"},
        {"content" : "","href"  : ""},
        {"content" : "","href"  : ""}
    ],
    "History" : [
        {"content" : "http://www.hybsl.cn/beijingcankao/beijingfenxi/2022-07-21/75308.html","href"  : "胡耀邦史料信息网"},
        {"content" : "https://www.allhistory.com","href"  : "全历史"},
        {"content" : "https://e-dunhuang.com","href"  : "数字敦煌"},
        {"content" : "http://g2.ltfc.net/home","href"  : "中华珍宝馆"},
        {"content" : "","href"  : ""}
    ],
    "ICON" : [
        {"content" : "ICON8","href" : "https://icons8.com/"},
        {"content" : "ICONPACKS","href"  : "https://www.iconpacks.net/"},
        {"content" : "","href"  : ""},
        {"content" : "","href"  : ""},
        {"content" : "","href"  : ""},
        {"content" : "","href"  : ""},
        {"content" : "","href"  : ""}
    ],
    "Website record inquiry" : [
        {"content" : "ICP备案查询网","href" : "https://www.beianx.cn/"},
        {"content" : "爱站网","href" : "https://www.aizhan.com/"},
        {"content" : "","href" : "https://www.beianx.cn/"},
        {"content" : "","href" : "https://www.beianx.cn/"},
        {"content" : "","href" : "https://www.beianx.cn/"},
        {"content" : "","href" : "https://www.beianx.cn/"},
        {"content" : "","href"  : ""}
    ],
    "Other--Linux" : [
        {"content" : "vmware","href" : "https://www.vmware.com/"}, //https://www.edlpoint.com/vmware-workstation-pro-license-key/
        {"content" : "Red Hat","href" : "https://www.redhat.com/en"},
        {"content" : "Kernel","href"  : "https://kernel.org/"},
        {"content" : "kali","href"  : "https://www.kali.org/"},
        {"content" : "https://bridges.torproject.org/bridges?transport=obfs4","href"  : "TorProject"}
    ]

}

function buildMenus(websites) {
    let menusDiv = window.document.getElementById("menus");
    for (const category in websites) {
        if (websites.hasOwnProperty(category)) {
            const links = websites[category];
            
            var categoryHeader = window.document.createElement('span');
            categoryHeader.textContent = category;
            categoryHeader.classList.add("menus-category");
            // Create a title and add a style category for the title.

            var subMenuDiv = window.document.createElement("div");
            subMenuDiv.className = 'subMenu';
            subMenuDiv.appendChild(categoryHeader);

            links.array.forEach(element => {
                var a = window.document.createElement('a');
                a.href = element.href;
                a.textContent = element.content;
                //a.target = element.target;
                a.target = "_blank";
                a.classList.add('menus-link');
                subMenuDiv.appendChild(a);
            });
            menusDiv.appendChild(subMenuDiv);
            subMenuDiv.style.display = "flex";
            subMenuDiv.style.flexWrap = "wrap";

        }
    } 
}


var linkElement = document.createElement("link");
// Create a link element.

linkElement.rel = "stylesheet";
linkElement.type = "text/css";
linkElement.href = './modules/menus/menus.css';
// Set the attribute of a link element.

document.head.appendChild(linkElement);
