import MaintenanceButtons from "@/Components/MaintenanceButtons";

const Maintenance = () => {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Maintenance Mode Control
                    </h2>
                    <MaintenanceButtons />
                </div>
            </div>
        </div>
    );
};
export default Maintenance;
