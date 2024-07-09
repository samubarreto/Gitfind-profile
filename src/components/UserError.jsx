import React from 'react'

export default function UserError({ user, error }) {
  return (<>

    {
      error === "404" && (
        <h3 className='user-error-txt'>User "{user}" Not Found 🦖</h3>
      )
    }
    {
      error === "403" && (
        <h3 className='user-error-txt'>
          Your API Token Expired 🤖
          <a href="https://github.com/samubarreto/Gitfind-profile" target="_blank" className='user-error-link'>
            · Please read the README.md
          </a>
        </h3>
      )
    }

  </>)
}