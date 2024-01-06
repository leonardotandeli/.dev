#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

command_exists () {
  command -v "$1" >/dev/null 2>&1
}

if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
