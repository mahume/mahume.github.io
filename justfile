[no-exit-message]
default:
    @just search

[doc('Search available commands')]
[group('Utility')]
[no-exit-message]
search query='':
    #!/usr/bin/env bash
    preview="just --unstable --color always --show {}"
    search="fzf --query '{{ query }}' --preview-window=down:75% --preview='${preview}'"
    just --choose --chooser="${search}"

[doc('List available commands')]
[group('Utility')]
commands:
    #!/usr/bin/env bash
    heading=$'\n{{ MAGENTA }}  {{ BOLD + ITALIC + UNDERLINE }}Available Commands{{ NORMAL }}\n\n'
    just --list --list-heading "${heading}"

alias s := start

start service='':
    #!/usr/bin/env bash
    set -euo pipefail
    case "{{ service }}" in
        '')
            pnpm run dev
            ;;
        *)
            just _log-error 'service' {{ service }}
            ;;
    esac

alias r := run

[group('Task')]
run task:
    #!/usr/bin/env bash
    case "{{ task }}" in
        workflow)
            act push --workflows '.github/workflows/deploy.yml'
            ;;
        *)
            just _log-error 'task' {{ task }}
            ;;
    esac

alias c := check

[group('Task')]
[no-exit-message]
check target='':
    #!/usr/bin/env bash
    set -euo pipefail
    case "{{ target }}" in
        '') 
            echo "{{ BLUE }}  {{ NORMAL }}Running all checks..."

            just _log-command-with-label "Check: Format" "just check format"
            just _log-command-with-label "Check: Lint" "just check lint"
            just _log-command-with-label "Check: Svelte" "just check svelte"
            just _log-command-with-label "Check: CI/CD" "just check workflow"

            echo "{{ GREEN }}  {{ NORMAL }}All checks completed"
            ;;
        format)
            pnpm run format:check
            ;;
        lint)
            pnpm run lint
            ;;
        svelte)
            pnpm run check
            ;;
        workflow)
            act --validate
            ;;
        *)
            just _log-error 'target' {{ target }}
            exit 1
            ;;
    esac

[group('Task')]
format target='':
    #!/usr/bin/env bash
    case "{{ target }}" in
        '')
            echo "{{ BLUE }}  {{ NORMAL }}Running..."
            echo ""
            just format justfile
            just format svelte
            echo "{{ GREEN }}  {{ NORMAL }}Finished"
            ;;
        'justfile')
            just _log-command-with-label "justfile" "just --fmt --unstable"
            ;;
        'svelte')
            pnpm run format
            ;;
        *)
            just _log-error 'target' {{ target }}
            exit 1
            ;;
    esac

[group('Task')]
lint:
    npx eslint .

alias b := build

build target='' env='':
    #!/usr/bin/env bash
    set -euo pipefail
    case "{{ target }}" in
        '') 
            pnpm run build
            ;;
        *)
            just _log-error 'environment' {{ env }}
            exit 1
            ;;
    esac

[doc('Pre-deployment tasks')]
[group('Deploy')]
prepare: format lint

[group('Deploy')]
deploy: (check '')
    git push

_log-command-with-label label command:
    @echo "{{ BLUE }}  {{ style("command") }}{{ label }}{{ NORMAL }}"
    {{ command }}
    @echo ""

_log-error command label:
    @echo "{{ style("error") }}  {{ NORMAL }}Unknown {{ command }}: {{ style("error") }}{{ label }}{{ NORMAL }}"

_open_url_after_delay url='' delay='0':
    @echo "{{ BLUE }}  {{ NORMAL }}Opening: {{ BLUE }}{{ url }}{{ NORMAL }}"
    (sleep {{ delay }} && open {{ url }}) &
