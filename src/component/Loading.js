import React from "react";

const Loading = () => {
	return (
		<div class="p-4 max-w-sm w-full mx-auto">
			<div class="animate-pulse flex space-x-4">
				<div class="flex-1 space-y-3 py-1">
					<div class="h-[160px] bg-slate-200 "></div>
					<div class="space-y-3">
						<div class="h-3 bg-slate-200 "></div>
						<div class="grid grid-cols-3 gap-4">
							<div class="h-3 bg-slate-200  col-span-2"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
