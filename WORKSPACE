# Marker that this folder is the root of a Bazel workspace
workspace(
    name = "web-app-bazelize",
)

# load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# http_archive(
#     name = "aspect_rules_js",
#     sha256 = "75c25a0f15a9e4592bbda45b57aa089e4bf17f9176fd735351e8c6444df87b52",
#     strip_prefix = "rules_js-2.1.0",
#     url = "https://github.com/aspect-build/rules_js/releases/download/v2.1.0/rules_js-v2.1.0.tar.gz",
# )

# load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

# rules_js_dependencies()

# load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")

# nodejs_register_toolchains(
#     node_version = DEFAULT_NODE_VERSION,
# )

# load("@aspect_rules_js//npm:repositories.bzl", "npm_translate_lock")

# # Read the pnpm-lock.yaml file to automate creation of remaining npm_import rules
# npm_translate_lock(
#     name = "npm",
#     npmrc = "//:.npmrc",
#     pnpm_lock = "//:pnpm-lock.yaml",
#     verify_node_modules_ignored = "//:.bazelignore"
# )

# load("@npm//:repositories.bzl", "npm_repositories")

# npm_repositories()