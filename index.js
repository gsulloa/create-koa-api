#!/usr/bin/env node
'use strict';
const co = require('co');
const prompt = require('co-prompt');
const program = require('commander');
const shell = require('shelljs');

const REPO = "git@github.com:gsulloa/react-template.git"

function clone(repo, dir){
  shell.exec(`git clone ${repo} ${dir}`)
}
function removeGit(dir) {
  shell.rm("-rf", `${dir}/.git`)
}
function createRepo(dir) {
  shell.cd(dir)
  shell.exec('git init && git add . && git commit -m "init commit"')
  shell.exec('hub create// && git push origin master')
  shell.cd("..")
}

program
  .arguments("<dir>")
  .option("-r, --repo <repo-url>", "URL repository to use as template")
  .action(function(dir) {
    co(function *(){
      const repo = program.repo ? program.repo : REPO;
      clone(repo, dir);
      removeGit(dir);
      createRepo(dir);
    })
  })
  .parse(process.argv)
