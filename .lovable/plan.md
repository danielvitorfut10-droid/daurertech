
Objetivo: eliminar de vez o erro de tela branca “Cannot read properties of null (reading 'useState' / 'useRef')”, estabilizando o runtime React e removendo a origem do conflito.

1. Diagnóstico confirmado
- O erro atual aponta para a camada de toast/theme, não para as seções da landing page.
- `src/components/ui/sonner.tsx` usa `useTheme()` de `next-themes`, mas não existe `ThemeProvider` no app.
- Ainda existem arquivos legados de toast no projeto (`src/hooks/use-toast.ts`, `src/components/ui/toaster.tsx`, `src/components/ui/toast.tsx`, `src/components/ui/use-toast.ts`), que continuam no grafo de dependências e coincidem com o stack trace.
- Como o site não precisa de troca de tema agora, o uso de `next-themes` é desnecessário e é o primeiro ponto a remover.

2. Correção principal
- Reescrever `src/components/ui/sonner.tsx` para não depender de `next-themes`.
- Usar o `<Toaster />` do `sonner` com tema fixo compatível com o visual do projeto, sem `useTheme()`.
- Manter `App.tsx` usando apenas esse toaster simplificado.

3. Limpeza do código legado
- Remover completamente o stack antigo de toast:
  - `src/hooks/use-toast.ts`
  - `src/components/ui/toaster.tsx`
  - `src/components/ui/toast.tsx`
  - `src/components/ui/use-toast.ts`
- Isso evita que o bundler/HMR continue puxando módulos antigos que aparecem no stack.

4. Estabilização adicional
- Se necessário, remover também a dependência `next-themes` do `package.json`, já que hoje ela não está sendo usada em nenhum outro lugar.
- Manter o `dedupe` de React no Vite e fazer uma recompilação limpa para garantir que o preview pare de reutilizar módulos quebrados.

5. Verificação após a correção
- Confirmar que a home abre sem tela branca.
- Testar especialmente:
  - carregamento inicial
  - FAQ (Accordion/Radix)
  - header mobile
  - navegação por âncoras
- Se ainda restar erro de hooks, o próximo passo será isolar temporariamente componentes Radix restantes, mas pelo código lido a causa mais provável está no toast/theme legado.

Detalhes técnicos
- Problema exato: o projeto mistura uma implementação moderna de toast (`sonner`) com código legado (`useToast` + Radix toast) e ainda usa `next-themes` sem provider global. Isso deixa o runtime suscetível a resolver hooks em um dispatcher nulo no preview.
- Arquivos centrais da correção:
  - `src/components/ui/sonner.tsx`
  - `src/App.tsx`
  - remoção dos arquivos legados de toast
  - possivelmente `package.json`

Resultado esperado
- A aplicação volta a renderizar normalmente.
- O erro de `useState`/`useRef` some.
- O projeto fica com uma única solução de toast, mais simples e consistente.

<lov-actions>
<lov-open-history>View History</lov-open-history>
<lov-link url="https://docs.lovable.dev/tips-tricks/troubleshooting">Troubleshooting docs</lov-link>
</lov-actions>
