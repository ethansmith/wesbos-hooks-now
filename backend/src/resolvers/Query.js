const { forwardTo } = require("prisma-binding")
const { hasPermission } = require("../utils")

const Query = {
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),
  me(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    )
  },
  async users(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in!")
    }
    console.log(ctx.request.userId)
    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ["ADMIN", "PERMISSIONUPDATE"])

    // 2. if they do, query all the users!
    return ctx.db.query.users({}, info)
  },
  async order(parent, args, ctx, info) {
    // make sure they are logged in

    if (!ctx.request.userId) throw new Error("you must be logged in")

    // query the current order

    const order = await ctx.db.query.order({ where: { id: args.id } }, info)

    // check if they have the permissions to see this order

    const ownsOrder = order.user.id === ctx.request.userId
    const hasPermissionToSeeOrder = ctx.request.user.permissions.includes(
      "ADMIN"
    )

    if (!ownsOrder || !hasPermissionToSeeOrder)
      throw new Error("you cant see this, sorry!")

    // return the order

    return order
  },
  async orders(parent, args, ctx, info) {
    const { userId } = ctx.request

    if (!userId) throw new Error("you must be logged in")

    if (userId !== args.userId)
      throw new Error("you are not allowed to see these orders")

    const orders = await ctx.db.query.orders(
      { where: { user: { id: args.userId } } },
      info
    )

    return orders
  }
}

module.exports = Query
