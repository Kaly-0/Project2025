import RSSParser from 'rss-parser';

export async function GET() {
    const parser = new RSSParser();
    const feedUrls = [
        'https://feeds.feedburner.com/TheHackersNews',
    ];

    let articles = [];

    for (const url of feedUrls) {
        try {
            const feed = await parser.parseURL(url);
            const feedArticles = feed.items.map(item => ({
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                content: item.contentSnippet,
                source: feed.title
            }));
            articles.push(...feedArticles);
        } catch (error) {
            console.error(`Error fetching ${url}:`, error);
        }
    }

    return new Response(JSON.stringify(articles), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}