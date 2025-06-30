import React from 'react'

export default async function HomePage() {
  await new Promise((r) => setTimeout(r, 3000));
  return <div>✅ App loaded successfully</div>;
}
