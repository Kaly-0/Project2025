import RSSParser from 'rss-parser';

export async function GET() {
    const parser = new RSSParser();
    const feedUrls = [
        'https://www.cert.ssi.gouv.fr/feed/',
        'https://www.cybermalveillance.gouv.fr/feed/'
    ];

    let articles = [];

    for (const url of feedUrls) {
        try {
            const feed = await parser.parseURL(url);
            const feedArticles = feed.items.map(item => ({
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                content: item.contentSnippet || item.content || '',
                source: feed.title
            }));
            articles.push(...feedArticles);
        } catch (error) {
            console.error(`Erreur lors du chargement de ${url} :`, error);
        }
    }

    return new Response(JSON.stringify(articles), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
