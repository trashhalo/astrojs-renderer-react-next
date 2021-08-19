# astrojs-renderer-react-next

Experimental react renderer for [astro](https://astro.build/) that supports async static rendering. This will let you resolve promises inside react components to load extra data! Currently using [react-ssr-prepass](https://github.com/FormidableLabs/react-ssr-prepass) but will use react 18 when available.

## usage

In your astro.config.mjs replace renderer-react with astrojs-renderer-react-next

In your react component do the suspense backfill. You can see an example of one in [the test case](./packages/test/fixtures/react-component/src/components/Async.jsx).

Add astrojs-renderer-react-next to your package.json

I'd love to add a hook to make this all easier.
