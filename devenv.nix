{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/basics/
  env.GREET = "The Cave Development Environment";

  # https://devenv.sh/packages/
  packages = [
    pkgs.git
    pkgs.just
  ];

  # https://devenv.sh/languages/
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_22;
    npm = {
      enable = true;
      install.enable = true;
    };
  };

  languages.typescript.enable = true;

  # https://devenv.sh/processes/
  # processes.dev.exec = "npm run dev";

  # https://devenv.sh/services/
  # services.postgres.enable = true;

  # https://devenv.sh/scripts/
  scripts.hello.exec = ''
    echo "Welcome to $GREET"
    echo "Node version: $(node --version)"
    echo "npm version: $(npm --version)"
    echo ""
    echo "Run 'just' to see available commands"
  '';

  enterShell = ''
    # Install beads if not already available
    if ! command -v bd &> /dev/null; then
      echo "Installing Beads issue tracker..."
      npm install -g @beads/bd
    fi
    hello
  '';

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running tests..."
    npm run test
  '';

  # https://devenv.sh/pre-commit-hooks/
  pre-commit.hooks = {
    prettier = {
      enable = true;
      excludes = [ "package-lock.json" "pnpm-lock.yaml" ];
    };
    eslint.enable = true;
  };

  # See full reference at https://devenv.sh/reference/options/
}
