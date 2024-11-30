const scriptURL = 'https://api.sheetmonkey.io/form/jNCz9f2rR4ZwUFsTuuYxhT'; // Atualize para seu endpoint do SheetMonkey

document.getElementById('emailForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita o recarregamento da página

  const formData = new FormData(e.target);

  try {
    const button = e.target.querySelector('button');
    button.disabled = true;
    button.textContent = "Enviando...";

    const response = await fetch(scriptURL, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Dados enviados com sucesso!');
      e.target.reset();
    } else {
      alert('Erro ao enviar os dados.');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Houve um problema na conexão.');
  } finally {
    const button = e.target.querySelector('button');
    button.disabled = false;
    button.textContent = "Enviar";
  }
});
