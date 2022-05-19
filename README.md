## Deployment is new
They just added the requirement to deploy.
```
Everything works on localhost:3000/VScode but the deployed site has an issue: 
javascripts clearTimeout() is not working on Netlify(my deployment host).
i.e. The challenge timer does not stop when it hits 0 secs or when you hit 'submit'.

I'm checking the issue to fix now. Hopefully I will have time to fix it before revision.
I may need to change deployment host.
```
## Deployment
The site is deployed on [https://resilient-gumption-9bc18f.netlify.app](https://resilient-gumption-9bc18f.netlify.app).
```
Deployment steps.

I use CI/CD on Netlify.
Step 1: Link Netlify to this GitHub repository
Step 2: Accept deploy settings on Netlify(Netlify builds and sets up Next.js settings automatically)
Site is now deployed.
```
## Tools

React + Next.js + TypeScript + Styled components + Jest + React Testing Library
```
Testing

1. Unit tests.
2. Integration tests.
```
