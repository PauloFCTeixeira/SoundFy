
   // Código de exemplo para baixar músicas do SoundCloud (apenas para fins educacionais)
const soundcloudUrl = 'URL_DA_MUSICA_NO_SOUNDCLOUD';
const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', async () => {
    try {
        const response = await fetch(soundcloudUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'nome_da_musica.mp3';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Erro ao baixar música:', error);
    }
});
 

