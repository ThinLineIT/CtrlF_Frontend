export default function infiniteScroll(func) {
  let scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  let scrollTop = parseInt(document.documentElement.scrollTop);
  let clientHeight = document.documentElement.clientHeight;
  console.log(scrollTop, clientHeight, scrollHeight);
  if (scrollTop + clientHeight === scrollHeight) {
    func();
  }
}
