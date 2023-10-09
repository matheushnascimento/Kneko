const imagens = document.querySelectorAll(".item");

function abrirImagem(event) {
  const imagem = event.target;

  // Criar um div para escurecer o fundo
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Cor de fundo escura com transparência
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "999";
  overlay.style.opacity = "0"; // Começa com a opacidade 0

  // Clonar a imagem para a sobreposição
  const enlargedImage = imagem.cloneNode();
  enlargedImage.style.width = "270px"; // Largura da imagem ampliada
  enlargedImage.style.height = "auto"; // Altura ajustada automaticamente para manter a proporção
  enlargedImage.style.opacity = "0"; // Começa com a opacidade 0
  enlargedImage.style.borderRadius = "15px"; // Border radius de 15px
  enlargedImage.style.transition = "opacity 0.5s"; // Adiciona transição suave

  // Adicionar a imagem ampliada à sobreposição
  overlay.appendChild(enlargedImage);

  // Adicionar a sobreposição ao corpo do documento
  document.body.appendChild(overlay);

  // Aguardar um pequeno atraso antes de definir a opacidade para 1 (para permitir a transição)
  setTimeout(() => {
    overlay.style.opacity = "1";
    enlargedImage.style.opacity = "1";
  }, 10);

  // Fechar a imagem ampliada quando a sobreposição é clicada
  overlay.addEventListener("click", () => {
    overlay.style.opacity = "0";
    enlargedImage.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 500); // Aguarda a conclusão da transição antes de remover a sobreposição
  });
}

imagens.forEach(function(imagem) {
  imagem.addEventListener("click", abrirImagem);
});
