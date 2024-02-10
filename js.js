(async function () {
  const res = await fetch("/artists", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Eminem",
    }),
  });
  const data = res.json();
  console.log(data);
})();
