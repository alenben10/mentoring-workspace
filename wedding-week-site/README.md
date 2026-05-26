# Alen & Belen Wedding Week Site

Sitio estático en español para compartir el cronograma visual de la semana de boda
en Ithaca, del 13 al 22 de junio de 2026.

Las fotos están guardadas localmente en `assets/photos/` para que la página cargue
sin depender de enlaces externos. Los créditos y enlaces a las fuentes originales
están en el bloque "Créditos de fotos" al final de la página.

Los detalles de llamas/alpacas están en `assets/llamas/` como PNGs transparentes
generados para este sitio.

## Abrir localmente

Abre `index.html` en el navegador. Si prefieres servirlo localmente, ejecuta:

```bash
python3 -m http.server 8767
```

y visita `http://localhost:8767`.

## Enlaces útiles

- Inicio: `index.html`
- Día de boda: `index.html#dia-20`
- Agenda completa: `index.html#agenda`

## Publicar gratis

- GitHub Pages: sube esta carpeta a un repositorio y activa Pages desde la rama principal.
- Netlify: arrastra la carpeta `wedding-week-site` a Netlify Drop.
- Vercel: importa el repositorio como sitio estático sin comando de build.
