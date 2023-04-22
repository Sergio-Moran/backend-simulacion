import { Bill } from "../../server.js";

const BillResolver = {
    Query: {
        AllBills: async () => {
            const data = await Bill.findAll();
            return data;
        },
        Bill: async (_, { id }) => {
            const data = await Bill.findByPk(id);
            return data;
        },
    },
    Mutation: {
        createBill: async (_, { name, cost }) => {
            const data = await Bill.create({ name, cost });
            return data;
        },
        updateBill: async (_, { id, name, cost }) => {
            const data = await Bill.update(
                { name, cost },
                {
                    where: {
                        id: id,
                    },
                }
            );

            return await Bill.findByPk(id);
        },
        deleteBill: async (_, { id }) => {
            await Bill.destroy({
                where: {
                    id: id,
                },
            });
            return "Deleted";
        },
    },
};

export { BillResolver };
