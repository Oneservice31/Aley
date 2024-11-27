function AleySearch() {
  const query = document.getElementById('searchQuery').value;
  const resultsContainer = document.getElementById('resultsContainer');

  if (!query) {
      alert("Zəhmət olmasa axtarış edin.");
      
      return;
  }

  var iframe = document.getElementById('iframe');
  iframe.style.display = 'none';  
  const results = [
      {
          title: `YouTube - ${query}`,
          url: `https://www.youtube.com/results?search_query=${query}`,
          description: "YouTube'da videolar və məlumatlar."
      },
      {
          title: `Facebook - ${query}`,
          url: `https://www.facebook.com/search/top?q=${query}`,
          description: "Facebook'dan hesab və məlumatlar."
      },
      {
          title: `Wikipedia - ${query}`,
          url: `https://tr.wikipedia.org/wiki/${query}`,
          description: "Wikipedia'dan məlumat."
      },
      {
          title: `Stack Overflow - ${query}`,
          url: `https://stackoverflow.com/search?q=${query}`,
          description: "Stack Overflow'da sorular və cavablar."
      },
      {
          title: `MDN Web Docs - ${query}`,
          url: `https://developer.mozilla.org/en-US/search?q=${query}`,
          description: "HTML, CSS, JavaScript haqqında məlumatlar."
      },
      {
          title: `GitHub - ${query}`,
          url: `https://github.com/search?q=${query}`,
          description: "GitHub'da layihələr və kodlar."
      },
      {
          title: `Yandex - ${query}`,
          url: `https://yandex.com/search/?text=${query}`,
          description: "Yandex browser'dən məlumat."
      }
  ];

  resultsContainer.innerHTML = "";

  results.forEach(result => {
      const resultItem = document.createElement('div');
      resultItem.classList.add('result-item');

      resultItem.innerHTML = `
          <h3><a href="${result.url}" target="_blank">${result.title}</a></h3>
          <p>${result.description}</p>
      `;
      resultsContainer.appendChild(resultItem);
  });

  
}