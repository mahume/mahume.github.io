<section id="contact">
	<div class="card card-body bg-contact rounded-0 border-0 py-3 text-white">
		<h2>Contact</h2>
	</div>
	<div class="card card-body border-top-0 border-right border-bottom-0 border-left rounded-0 py-5">
		<h3>Let's Get In Touch</h3>
		<form
			on:submit|preventDefault={() => {
				/* TODO: integrate form action */
			}}
		>
			<div class="form-group">
				<div class="input-group input-group-lg">
					<div class="input-group-prepend">
						<span class="input-group-text bg-main text-white"><i class="fas fa-user"></i></span>
					</div>
					<input type="text" class="form-control text-white" placeholder="Name" />
				</div>
			</div>
			<div class="form-group">
				<div class="input-group input-group-lg">
					<div class="input-group-prepend">
						<span class="input-group-text bg-main text-white"><i class="fas fa-envelope"></i></span>
					</div>
					<input type="email" class="form-control text-white" placeholder="Email" />
				</div>
			</div>
			<div class="form-group">
				<div class="input-group input-group-lg">
					<div class="input-group-prepend">
						<span class="input-group-text bg-main text-white"
							><i class="fas fa-pencil-alt"></i></span
						>
					</div>
					<textarea class="form-control text-white" rows={4} placeholder="Message"></textarea>
				</div>
			</div>
			<button class="btn btn-primary btn-block btn-lg" disabled>Submit (Disabled)</button>
		</form>
	</div>
</section>
