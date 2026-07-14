#language: pt
 
Funcionalidade: Reservar quarto
  Esquema do Cenario: Agendar quarto com sucesso
    Dado que estou na pagina principal
    Quando acesso a pagina de reservas
    Entao visualizo os planos de hospedagem
    Quando seleciono o plano recomendado
    Entao visualizo o formulario de reserva
    Quando seleciono o check-in para "<check_in>"
    E preencho a "<estadia>" e "<num_hospedes>" e "<nome>"
    E clico em confirmar reserva
    Entao visualizo a confirmacao da reserva
 
  Exemplos:
  | check_in | estadia | num_hospedes | nome    |
  | 1        | 2       | 2            | Fulano  |
  | 20       | 3       | 4            | Ciclano |
