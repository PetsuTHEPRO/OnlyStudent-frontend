<template>
  <div class="dropdown d-md-none">
    <button
      class="btn btn-secondary"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
    <i class="bi bi-list"></i>
    </button>
    <ul class="dropdown-menu dropdown-menu-dark">
      <li>
        <a class="dropdown-item {{ isActive('home') }}" href="/home">
          <i class="bi bi-house-door"></i> Home
        </a>
      </li>
      <li>
        <a class="dropdown-item {{ isActive('profile') }}" href="/profile">
          <i class="bi bi-person"></i> Profile
        </a>
      </li>
      <li>
        <a
          class="dropdown-item {{ isActive('minhas-turmas') }}"
          href="/minhas-turmas"
        >
          <i class="bi bi-book"></i> Minhas Turmas
        </a>
      </li>
      <li>
        <a class="dropdown-item {{ isActive('suporte') }}" href="/suporte">
          <i class="bi bi-question-circle"></i> Suporte
        </a>
      </li>
      <li>
        <hr class="dropdown-divider" />
      </li>
      <li>
        <a class="dropdown-item" href="/logout">
          <i class="bi bi-box-arrow-right"></i> Logout
        </a>
      </li>
    </ul>
  </div>
</template>
