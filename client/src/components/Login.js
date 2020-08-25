import React from 'react'

export const Login = () => (
  <form className="center mt-5">
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input is-primary"
          type="email"
          placeholder="Primary input"
        />
      </div>
    </div>
    <button className="button is-success">Get Travel Plans</button>
  </form>
)
