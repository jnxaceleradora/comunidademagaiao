from pathlib import Path

from PIL import Image


ASSETS = Path(__file__).resolve().parents[1] / "src" / "assets"


def convert(name: str, *, max_width: int | None = None, quality: int = 84) -> None:
    source = ASSETS / name
    output = source.with_suffix(".webp")

    with Image.open(source) as image:
        if max_width and image.width > max_width:
            height = round(image.height * max_width / image.width)
            image = image.resize((max_width, height), Image.Resampling.LANCZOS)

        image.save(output, "WEBP", quality=quality, method=6)


convert("marcela-hero-integrada.png", quality=82)
convert("marcela-profissional-source.jpg", max_width=900, quality=82)

for filename in (
    "mapa-coerencia-textual.png",
    "mapa-oracoes-subordinadas-reduzidas.png",
    "mapa-expressoes-problematicas.png",
    "mapa-regencia-nominal.png",
    "mapa-tipos-de-texto.png",
):
    convert(filename, max_width=1200, quality=84)
