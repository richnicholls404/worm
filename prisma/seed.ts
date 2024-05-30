import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const hashPassword = (password: string) => bcrypt.hashSync(password, 8);

async function main() {
  const samnic = await prisma.user.upsert({
    where: { username: "samnic" },
    update: {},
    create: {
      username: "samnic",
      password: hashPassword("gkt"),
      name: "Samuel",
      author: {
        create: {
          name: "Samuel",
          bio: "Samuel loves football and acting. His favourite author is J.K. Rowling.",
          books: {
            create: [
              {
                title: "Orange Banana",
                publishedAt: new Date(),
                bookPages: {
                  create: [
                    {
                      content: "Orange Banana is a book about the Greek gods.",
                      pageNumber: 1,
                    },
                    {
                      content: "The book is about the Trojan War.",
                      pageNumber: 2,
                    },
                    {
                      content: "The book is about the Trojan War.",
                      pageNumber: 3,
                    },
                  ],
                },
              },
              {
                title: "Monkey's Ice Cream",
                publishedAt: new Date(),
                bookPages: {
                  create: [
                    {
                      content:
                        "The Apple of Discord is a book about the Greek gods.",
                      pageNumber: 1,
                    },
                    {
                      content: "The book is about the Trojan War.",
                      pageNumber: 2,
                    },
                    {
                      content: "The book is about the Trojan War.",
                      pageNumber: 3,
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
  });
  const Apple4 = await prisma.user.upsert({
    where: { username: "Apple4" },
    update: {},
    create: {
      username: "Apple4",
      password: hashPassword("bfw"),
      name: "Harriet",
      author: {
        create: {
          name: "Harriet",
          bio: "Harriet loves reading and Sylvanians. Her favourite author is Enid Blyton.",
          books: {
            create: [
              {
                title: "Bunny's Orange Banana",
                publishedAt: new Date(),
                bookPages: {
                  create: [
                    {
                      content:
                        "The Apple of Discord is a book about the Greek gods.",
                      pageNumber: 1,
                    },
                    {
                      content: "The book is about the Trojan War.",
                      pageNumber: 2,
                    },
                    {
                      content: "The book is about the Trojan War.",
                      pageNumber: 3,
                    },
                  ],
                },
              },
              {
                title: "Bunny Goes to The Moon",
                publishedAt: new Date(),
                bookPages: {
                  create: [
                    {
                      content:
                        "The Apple of Discord is a book about the Greek gods.",
                      pageNumber: 1,
                    },
                    {
                      content: "The book is about the Trojan War.",
                      pageNumber: 2,
                    },
                    {
                      content: "The book is about the Trojan War.",
                      pageNumber: 3,
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
  });
  console.log({ samnic, Apple4 });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
