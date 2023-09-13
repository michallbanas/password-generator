use warp::Filter;

#[tokio::main]
async fn main() {
    let index = warp::path::end()
        .and(warp::fs::file("index.html"));

    let src = warp::path("src").and(warp::fs::dir("src")).map(|reply| {
        warp::reply::with_header(reply, "Cache-Control", "no-cache")
    });

    let routes = index.or(src);

    warp::serve(routes)
        .run(([127, 0, 0, 1], 3030))
        .await;
}