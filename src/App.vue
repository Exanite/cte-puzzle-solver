<template>
  <header>
    <router-link :to="{ name: 'Home' }">
      <h1>Craft to Exile - Puzzle Solver</h1>
    </router-link>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'Scramble' }">
            Scramble
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Riddle' }">
            Riddle
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <router-view/>
</template>
