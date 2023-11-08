import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Java",
    icon: "pen-to-square",
    prefix: "/java/",
    children: [
      {
        text: "Java基础",
        icon: "pen-to-square",
        prefix: "basic/",
        children: [
          {
            text: "Java基础",
            link: "basic"
          },
          {
            text: "集合",
            link: "collection",
          },
          {
            text: "并发",
            link: "concurrent",
          }
        ],
      },
      {
        text: "Java进阶 - 新版本特性",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "Java8",
            // icon: "pen-to-square",
            link: "1",
          },
          {
            text: "Java11",
            // icon: "pen-to-square",
            link: "2",
          },
          {
            text: "Java17",
            // icon: "pen-to-square",
            link: "3",
          }
        ],
      },
      {
        text: "Java进阶 - JVM",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "Java 类加载机制",
            // icon: "pen-to-square",
            link: "1",
          },
          {
            text: "垃圾回收机制",
            // icon: "pen-to-square",
            link: "2",
          }
        ],
      },
    ],
  },
  {
    text: "数据库",
    prefix: "/java/",
    children: [
      {
        text: "SQL 数据库",
        prefix: "banana/",
        children: [
          {
            text: "MySQL",
            // icon: "pen-to-square",
            link: "1",
          }
        ],
      },
      {
        text: "NoSQL 数据库",
        prefix: "banana/",
        children: [
          {
            text: "Redis",
            link: "1",
          }
        ],
      },
    ],
  },

  { text: "框架|中间件",
    prefix: "banana/", 
    children: [{
      text: "Kafka",
      // icon: "pen-to-square",
      link: "1",
    },
    {
      text: "Kafka",
      // icon: "pen-to-square",
      link: "1",
    }
    ]
  },
  { text: "架构", link: "dragonfruit" },
  { text: "项目", link: "dragonfruit" },
  {
    text: "历史站点",
    icon: "history",
    link: "https://shixiaoding.github.io/oliver-vuepress",
  },
  {
    text: "学习笔记",
    icon: "book",
    link: "https://gitee.com/sdoliver/study-notes",
  },
]);
