#!/usr/bin/env node
'use strict';
const co = require('co');
const prompt = require('co-prompt');
const program = require('commander');
const shell = require('shelljs');

const REPO = "git@github.com:gsulloa/koa-boilerplate.git"

function clone(dir, repo){
  shell.exec(`git clone ${repo} ${dir}`)
}
function pull(dir, type) {
  shell.cd(dir)
  shell.exec(`git pull origin ${type}`)
  shell.cd("..")
}
function removeGit(dir) {
  shell.rm("-rf", `${dir}/.git`)
}
function createRepo(dir) {
  shell.cd(dir)
  shell.exec('git init && git add . && git commit -m "init commit"')
  shell.exec('hub create && git push origin master')
  shell.cd("..")
}

program
  .arguments("<dir>")
  .option("-r, --repo <repo-url>", "URL repository to use as template")
  .option("-a, --auth", "Start with auth")
  .action(function(dir) {
    co(function *(){
      const repo = program.repo ? program.repo : REPO;
      clone(dir, repo);
      if (program.auth) {
        pull(dir, "auth")
      }
      removeGit(dir);
      // createRepo(dir);
    })
  })
  .parse(process.argv)
