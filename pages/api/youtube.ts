import puppeteer from 'puppeteer';
import chrome from 'chrome-aws-lambda';

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  subscribers: number;
  views: number;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const options = {
    args: [...chrome.args, '--hide-scrollbars', '--disable-web-security'],
    defaultViewport: chrome.defaultViewport,
    executablePath: await chrome.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  };

  const browser = await puppeteer.launch(options);

  // const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.youtube.com/@TitorPs360/about');

  const data = await page.evaluate(() => {
    const subscribersNode = document.querySelector('#subscriber-count') as HTMLElement;
    const viewsNode = document.querySelector(
      '#right-column > yt-formatted-string:nth-child(3)'
    ) as HTMLElement;

    const subscribers =
      parseFloat(subscribersNode.innerText.split(' ')[0].replace(/K/g, '')) * 1000;
    const views = parseInt(viewsNode.innerText.split(' ')[0].replace(/,/g, ''));

    return {
      subscribers: subscribersNode ? subscribers : 0,
      views: viewsNode ? views : 0,
    };
  });

  await browser.close();

  res.status(200).json({ subscribers: data.subscribers, views: data.views });
};

export default handler;
