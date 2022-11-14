# WebAR with Nextjs

> **IMPORTANT**: AR BUTTON DOES NOT WORK IN DEV MODE (`npm run dev`), NEED TO BUILD SOURCE CODE FIRST THEN RUN SERVE THE OUTPUT (`npm run start`).

```sh
npm run build
# > webar@0.1.0 build ...
# > next build

# info  - Linting and checking validity of types
# info  - Creating an optimized production build
# info  - Compiled successfully
# info  - Collecting page data
# info  - Generating static pages (3/3)
# info  - Finalizing page optimization

# Route (pages)                              Size     First Load JS
# ┌ ○ /                                      2.53 kB          90 kB
# ├   /_app                                  0 B            87.5 kB
# ├ ○ /404                                   212 B          87.7 kB
# └ λ /api/hello                             0 B            87.5 kB
# + First Load JS shared by all              87.7 kB
#   ├ chunks/framework-bf5fbff7bc905caa.js   45.7 kB
#   ├ chunks/main-ed8b3a33689edc47.js        39.2 kB
#   ├ chunks/pages/_app-8321060a9d0f4184.js  619 B
#   ├ chunks/webpack-f046fe78d4918125.js     2.03 kB
#   └ css/ab44ce7add5c3d11.css               247 B

# λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
# ○  (Static)  automatically rendered as static HTML (uses no initial props)
```

```sh
npm run start
# > webar@0.1.0 start ...
# > next start

# ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```
