from pathlib import Path
from PIL import Image

downloads = Path('C:/Users/Windows 10/Downloads/Flashcards')
assets = Path(__file__).resolve().parents[1] / 'src/assets'
sources = {
    'adjunto-adnominal': downloads / 'ChatGPT Image 7 de set. de 2026, 14_20_11.png',
    'digrafo-difono': downloads / 'ChatGPT Image 19 de set. de 2026, 09_46_50.png',
    'senao-se-nao': Path('C:/Users/WINDOW~1/AppData/Local/Temp/codex-clipboard-48299b3b-7398-430f-a342-1e5ebf03c49e.png'),
    'nao-use-virgula': downloads / 'ChatGPT Image 8 de set. de 2026, 12_24_05.png',
    'entre-mim-e-voce': downloads / 'ChatGPT Image 13 de set. de 2026, 10_50_35.png',
    'uso-do-cujo': downloads / 'ChatGPT Image 14 de set. de 2026, 17_13_04.png',
    'proclise': downloads / 'ChatGPT Image 15 de set. de 2026, 10_41_31.png',
    'complemento-nominal': downloads / 'ChatGPT Image 16 de set. de 2026, 10_07_47.png',
    'virgula-antes-do-e': downloads / 'ChatGPT Image 19 de set. de 2026, 11_04_14.png',
}

for name, source in sources.items():
    with Image.open(source) as image:
        image.thumbnail((900, 900), Image.Resampling.LANCZOS)
        target = assets / f'flashcard-{name}.webp'
        image.save(target, 'WEBP', quality=86, method=6)
        print(f'{target.name}: {target.stat().st_size // 1024} KB')
