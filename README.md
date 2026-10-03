# Localiza Assinatura — Meu Elétrico

Protótipo estático (HTML/CSS/JS), sem build, npm ou backend.

```bash
python3 -m http.server 8000
```

Abra **http://localhost:8000**. Escolha um carro, conte sua rotina e veja a comparação (combustão) ou o raio-x do modelo (elétrico).

## Configuração

- `config.js`: preencha `GOOGLE_MAPS_API_KEY`. Ative faturamento, **Maps JavaScript API** e **Places API (New)** no projeto Google Cloud. `DEMO_MAP_ID` serve para testar os marcadores; substitua por seu Map ID ao publicar.
- A chave **fica visível no navegador**. Restrinja por HTTP referrer (inclua `http://localhost:8000/*` no desenvolvimento e seu domínio ao publicar) e somente às duas APIs necessárias.
- `app.js`: `CAR_CATALOG` centraliza modelos, imagens, preços e parâmetros de cada carro; `EV_RECOMMENDATIONS` contém o mapeamento e suas limitações; `SIMULATION_CONFIG` contém tarifas, fatores de CO₂ e parâmetros compartilhados.
- `FORCE_DEMO_MODE = true` evita geolocalização e Places. Exibe 10 pontos fictícios em BH; usa Google Maps se houver chave e acesso, ou esquema local interativo se não houver. `DEMO_CHARGING_POINTS` e `LOCALIZA_ELECTRIC_IMPACT` são os mocks editáveis.

A busca real retorna até 15 pontos em 10 km, ordenados por distância; **não é uma contagem municipal**. Requer chave autorizada e internet. Sem chave, use “Visualizar demonstração”. Localhost é aceito para geolocalização; em hospedagem use HTTPS.

## Lógica da simulação

Todos os valores dos veículos são **referências ilustrativas**, não oferta/ficha oficial. O total inclui assinatura + consumo; não inclui instalação, estacionamento ou taxas extras. Consumo misto usa metade dos quilômetros na cidade e metade na estrada. CO₂ compara gasolina no escapamento e geração de energia, sem fabricação; no fluxo elétrico a referência é identificada apenas no impacto ambiental.

A recomendação é uma curadoria explícita por uso/categoria, carroceria/espaço, preço, proposta e autonomia. SUV → hatch e picape → SUV são marcados como **sem equivalência direta**. Novos carros sem mapeamento não recebem uma sugestão inventada.

Compatibilidade (heurística, não probabilidade): **exige planejamento** sem recarga própria ou uso diário acima de 70% da autonomia; **boa** com recarga própria e estrada ou uso acima de 40%; **alta** nos demais casos. A média usa 30 dias; dias atípicos exigem planejamento.

## Imagens

Todos os 14 modelos do catálogo têm imagens locais em `assets/`. O Dolphin Mini usa `byd.png`, o EX2 usa `ex2.png` e o Yuan Pro usa `yuan pro.png`. O arquivo `car-placeholder.svg` permanece como fallback caso uma imagem falhe. Premium fica vazio até existir um modelo com dados e asset adequados.

## Referências da integração

[Nearby Search / Places New](https://developers.google.com/maps/documentation/javascript/nearby-search) · [Carregamento do Maps](https://developers.google.com/maps/documentation/javascript/load-maps-js-api) · [Benefícios Localiza](https://assinatura.localiza.com/)
