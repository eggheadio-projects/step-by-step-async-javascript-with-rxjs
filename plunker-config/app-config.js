SystemJS.config({
  packageConfigPaths: ["github:*/*.json", "npm:@*/*.json", "npm:*.json"],
  map: {
    "rxjs": "npm:rxjs@5.4.3"
  },
  packages: {
    "npm:rxjs@5.4.3": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.4"
      }
    }
  }
});
