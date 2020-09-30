export function typeInput(Name: string) {
  switch (Name) {
    case 'Email': return 'email';
    case 'Senha': return 'password';
    case 'Confirmar Senha': return 'password';
    default: return 'text';
  }
}

export function selectClassName(elementValidate: boolean) {
  switch (elementValidate) {
    case false: return 'ErrorInput';
    default: return 'NormalInput';
  }
}

export function handleErro(Name: string) {
  switch (Name) {
    case 'Email': return 'Email Inválido';
    case 'Senha': return 'Mínimo 6 caractéres';
    case 'Nome': return 'Mínimo 3 caractéres';
    case 'Confirmar Senha': return 'Senhas não coincidem';
  }
}
