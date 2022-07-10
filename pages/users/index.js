import React from "react"

function index({ users }) {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>
              {user.name} - {user.email}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default index

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  return {
    props: {
      users: data,
    },
  }
}
